import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';

import { parseCookies, destroyCookie } from 'nookies';
import { firebaseAdmin as admin } from 'framework/firebase/admin';

export default async function sessionLogoutApi(req: Req, res: Res) {
  if (req.method !== 'POST') return res.status(400).send('Bad request');

  const auth = admin.auth();
  const session = parseCookies({ req }).token || '';

  const decodedClaims = await auth.verifySessionCookie(session).catch(() => null);

  if (decodedClaims) {
    await auth.revokeRefreshTokens(decodedClaims.sub);
  }

  destroyCookie({ res }, 'token', { path: '/' });

  res.send(JSON.stringify({ status: 'success' }));
}
