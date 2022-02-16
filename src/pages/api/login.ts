import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import { firebaseAdmin as admin } from 'framework/firebase/admin';
import { setCookie } from 'nookies';

export default async function sessionApi(req: Req, res: Res) {
  if (req.method !== 'POST') return res.status(400).send('Bad request');

  const auth = admin.auth();

  const expiresIn = 60 * 60 * 24 * 3 * 1000;
  const id = (req.body.token || '').toString();
  const sessionCookie = await auth.createSessionCookie(id, { expiresIn });

  const options = {
    maxAge: expiresIn,
    httpOnly: true,
    secure: true,
    path: '/',
  };

  setCookie({ res }, 'token', sessionCookie, options);

  res.send(JSON.stringify({ status: 'success' }));
}
