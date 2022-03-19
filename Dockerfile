#base image
FROM node: alpine

#copy build files
COPY ./ ./

#install depedancies
RUN npm install

#startup command
CMD ["npm","start"]
