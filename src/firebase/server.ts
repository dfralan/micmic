import type { ServiceAccount } from "firebase-admin";
import { initializeApp, cert, getApps } from "firebase-admin/app";

const activeApps = getApps();
const serviceAccount = {
  "type": "service_account",
  "project_id": "micmic-58d01",
  "private_key_id": "69e224769c5ab9333a3884a48c760a3a7c53c196",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDAhhZC6shz5yQ1\nbWEseYftJE4I1d5CApBsz2aD2TwZRhAKkz7HFuVf+QkFaSCNtNCIXDZuYElUkbDs\nH966eMd65AFMwMDcePkYEwwHWb9MzIV4Qk96Xx+mD7UtY+Z43FLsDERkLotuXIQo\n5+3eki0cQgVJSuQRM+tP0M7n99UfVHlEhP6zV3ZAEBsIdz2L31UUfsZZiKJeQpm8\noc1QK+v54wPIOXraVcr+ASU1AARrz1T6mOLwHtK6nmw1Q3+9fdh1n+doWouh9LIa\nB5Q9efzmp9j8Z40Pp9CKNEcJIU5cd6QboDI/PM8hqEFtJasTcZTd/jXHo/cvtxzy\n0ybphMZjAgMBAAECggEAKBjlMwu2MxmNe4kr53jqW/QnQoTUlRf2n4r0tXo9n5/t\ngF5ZgVqd7EawX82c55akpfnaplNsgm4TlKIwn9K+7TPmp2cv49tYOfDhnPhOtP6V\nv83Dwt9j9pCn8euwGTT+GkaVye29wX8IUYK4kpYMSinf8vtjk8el90oshbiizTLL\n5qIp/sv9pE8nAKMf+p3W+NgvM3jWdxJP9XvJ+fPLiu8yJ2ZAFIi8EbkmbU9lpZn3\nlCdKvGhgOIji3bMM7/b4cz9d3hiG4Kf9UFdYipZjkrQ+/1hprT8QGZzIMRObKkrl\nv0X1/e7a12rLFBUdp4RpBZNJJMvDFjzY4u/U6iFXvQKBgQD/rpFTicRVRIoG0USm\nbW6gCV0lq5/oZHU7MD+dr8TtdcTr2b0wI7LWlYPcFhJ7WOGOL3CUKYm783x5IGyJ\nE8IDwh/KCJOBSrM3YOxB3DXYgoxbNyQjA1CHRwLkYFTMUybyzh/2jvEPA2JH4N5J\nYqd3YqP2GfSX/Z5mWugbAnWIDQKBgQDAw2dsdtsmdBO7TQRY1meZkEWlcxnp0BNw\nPQjkmdoFNRjeVRaGsmHwCfo9YXmQJQtU2mOfkdTCvLiv/gG5FG8kZcg1NBIBdPBA\nOoPbQdMESidLQGSx7yTWX7GZnW12C1bv9fwk6/f5lEw2BGviYJmkNefH/+Qh80u3\nQ2cf7xT8LwKBgEibl1OE1Qdt3lCPTxKAEyFJZ3VSJqgFFzGGwxoRlzfj8NcVT1+D\nU78SWI7AieETXYJWQH8iyKViQN/Y8FmBDeCpWQOzqcfWocxBLvaJBZWFhTxGDXIP\n9+diqBSYspwPpQjgtjz7XMNpr5g/6IAojuwdS/iQaGBdOoVQnYdGDIBlAoGBAKCV\n6SI1/ioRx6Jg7f8oVtRamXrU4cCkZJ07a54uAbAW5OnLzuFV2DtFxJ/ABaqtAbyl\n1xrHPY0h9WZAYKUUPeb/mAOipmFqTv/i/5f4RVgsgoGxWnHVfUXOIMGNofQWTE3K\nCk2j+0iDX94cXtgPi89+TOKT7jTOX8SDtXSoEz5nAoGBAPK6u2CynRRvirrDiFbT\nFV0MaeZl2Z9bFlHYqhirB5tA6xU+TW6g/glnbVeZ35Fp2BwpHRV2Zoqhnr16VOcp\n0cfxJRpbk3Hs0zAK8JheO/mKf0rqViaO6iXy1Q/0SAOpn0Ggt97XDThUj6uIr0V0\n0JcHmEaiH0cjxTdM93kckTk8\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ospv1@micmic-58d01.iam.gserviceaccount.com",
  "client_id": "102577058427976119857",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ospv1%40micmic-58d01.iam.gserviceaccount.com",
  "universe_domain": "googleapis.com"
};

export const app = activeApps.length === 0 ? initializeApp({
  credential: cert(serviceAccount as ServiceAccount),
}) : activeApps[0];