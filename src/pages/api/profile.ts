import type { NextApiRequest as Req, NextApiResponse as Res } from 'next';
import { firebaseAdmin as admin } from 'framework/firebase/admin';
import { parseCookies, destroyCookie } from 'nookies';

export default async function meApi(req: Req, res: Res) {
  const session = parseCookies({ req }).token;

  if (req.method !== 'GET' || !session) return res.status(400).json({ code: 400, user: {} });

  const auth = admin.auth();
  const user = await auth.verifySessionCookie(session, true).catch(() => {
    destroyCookie({ res }, 'token', { path: '/' });
    res.status(403).json({ code: 403, user: {} });
    return;
  });

  res.json(
    user
      ? { code: 200, user: { uid: user.uid, userName: user.name, profileImage: user.picture } }
      : { code: 403, user: {} },
  );
}
