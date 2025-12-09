FROM node:22-bookworm

ENV WORKDIR=/site

WORKDIR ${WORKDIR}

COPY . ${WORKDIR}/

RUN npm install

CMD [ "npm", "run", "dev", "--", "--host", "0.0.0.0" ]