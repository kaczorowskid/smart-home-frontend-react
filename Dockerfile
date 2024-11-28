FROM node:20 AS build

WORKDIR /app

ARG VITE_API
ENV VITE_API=$VITE_API

COPY . .

RUN npm install && npm run build

FROM nginx:alpine

COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
