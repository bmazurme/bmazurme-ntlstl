This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Tech stack
![TypeScript](https://img.shields.io/badge/-TypeScript-black?style=flat-square&logo=typescript)
![Next](https://img.shields.io/badge/-Next-black?style=flat-square&logo=next.js)

### Demo
[![Netlify](https://img.shields.io/badge/-Netlify-black?style=flat-square&logo=netlify)](https://main--celebrated-pithivier-e91356.netlify.app/)
[![GitHubPages](https://img.shields.io/badge/-GitHubPages-black?style=flat-square&logo=GitHub)](https://bmazurme.github.io/ntlstl/)

### Docker

`docker-compose build`

`docker-compose up`

`docker-compose stop`

`docker system prune -a`

`docker push cr.yandex/${REGISTRY_ID}/ntlstl:latest`

`docker pull cr.yandex/${REGISTRY_ID}/ntlstl:latest`

`docker run cr.yandex/${REGISTRY_ID}/ntlstl:latest`

`docker run -d -p 80:3000 cr.yandex/${REGISTRY_ID}/ntlstl:latest`

[https://cloud.yandex.ru/docs/container-registry/tutorials/run-docker-on-vm#before-begin](https://cloud.yandex.ru/docs/container-registry/tutorials/run-docker-on-vm#before-begin)

`docker exec -it container_ID_or_name /bin/bash`

build ```docker build -t docker_nextjs:developement .```

run ```docker run --publish 3000:3000 docker_nextjs:developement```

### NGINX

`sudo apt update`

`sudo apt install -y nginx`

`sudo ufw allow 'Nginx Full'`

`sudo ufw allow OpenSSH`

`sudo ufw enable`

`sudo systemctl enable --now nginx`

`sudo nano /etc/nginx/sites-available/default`

`sudo nginx -t`

`sudo systemctl reload nginx`

### SSL

`sudo apt update`

`sudo apt install -y certbot python3-certbot-nginx`

`sudo certbot --nginx`

`sudo systemctl reload nginx`
