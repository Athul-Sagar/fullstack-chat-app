# Use Node.js as base image

FROM node:18

# Set Working Directory Inside the Container
WORKDIR /app

#Copy package.json and package-lock.json first (to leverage Docker Caching)

COPY package.json package-lock.json ./

#Install Dependencies
RUN npm install

#Copy the rest of the backend file

COPY . . 

#Expose port 5000 (for API request)
EXPOSE 5000


#Start the backend server

CMD [ "npm","start" ]

