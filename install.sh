
# npm init -y
npm install express qrcode swagger-jsdoc swagger-ui-express
npm install --save-dev typescript ts-node @types/express @types/node @types/qrcode @types/swagger-jsdoc @types/swagger-ui-express
npm run build
npm run generate
npm run dev