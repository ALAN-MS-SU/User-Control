FROM node:22.12.0

WORKDIR /doc

COPY . .

RUN rm -rf node_modules
RUN rm -rf .next
RUN npm i
RUN npm run build

CMD ["npm","start"]

EXPOSE 3000