FROM node:14

WORKDIR /app

COPY package.json package.json
COPY package-lock.json package-lock.json 
 
COPY . .


RUN npm install

EXPOSE 9000 

ENTRYPOINT ["node", "main.js"]


### to make custom image run 'docker build -t <image-name> .  (this dot last means this dockerfile is in this path,
## basically we need to give docker file path at last)'
### to pass env variable run 'docker run -it -e PORT=5000 -p , means process.env.PORT value will be 5000, and for mapping we can add 5000:5000 <image-name>'
### if there is n change in any of the file docker use docker cache to make build and is builded faster always ,also note if you want to install
###  something do that on top before COPY package.json package.json ,COPY package-lock.json package-lock.json ,COPY . ., RUN npm install becoz
###  odering matters if we secify that after main.ts every time there is change in main.js those updates will run again and again, 
###  means we should cache those updates and should not run again and again, so odering matterrs, and this is called layer caching
###