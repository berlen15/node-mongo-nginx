FROM ubuntu

RUN mkdir src
WORKDIR /src
RUN apt update 
RUN apt install -y nginx 
RUN apt install -y nodejs 

ADD ./src .
EXPOSE 80

CMD ["nginx","-g","daemon off;"]
