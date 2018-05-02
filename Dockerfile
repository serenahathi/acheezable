FROM node:carbon

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies (wildcard covers package.json and package-lock.json)
COPY package*.json ./

RUN npm install 
# If building for production:
# RUN npm install --only-production

# Bundle app source code
COPY . .

# app binds to port 3000 so:
EXPOSE 3000

CMD ["node", "server/server.js"]

