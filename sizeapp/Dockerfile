# pull official base image
#In Stage 1, we are copying our app code in the “app” folder and installing app dependencies from package.json file and creating production build using Node image.
FROM node:alpine

#RUN mkdir /app
# set working directory
WORKDIR /app
#ADD . /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH

# install app dependencies
COPY "package.json" ./
COPY "package-lock.json" ./
RUN npm install

# add app
COPY . ./

#RUN npm run build

#stage 2
#In the Stage 2, we are using nginx server image to create nginx server and deploy our app on it by copying build items from */app/build* folder to nginx server at */usr/share/nginx/html* location.
#FROM nginx:1.17.1-alpine

#COPY --from=build-step /app/build /usr/share/nginx/html

#EXPOSE 3000

# start app
CMD ["npm", "start"]



