# Usando o Sigim Compose

O sigim compose é uma forma rápida de levantar os ambientes do projeto caso o desenvolvedor não queira configurar todos os ambientes de desenvolvimento como o ruby, node e postgres no host de desenvolvimento.

Primeiramente é necessário instalar o docker. O passo a passo de instalação em várias distribuições linux esta no site do fabricante. Este link contém o passo a passo de instalação na distribuição ubuntu: https://docs.docker.com/engine/install/ubuntu/, porem para facilitar deixarei descrito os comandos de instalação a baixo. Só lembrando que os comandos podem ser modificados pelo criador do docker.

<br/>

```PowerShell
sudo apt-get update

sudo apt-get install \
    ca-certificates \
    curl \
    gnupg \
    lsb-release

sudo mkdir -p /etc/apt/keyrings

curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /etc/apt/keyrings/docker.gpg

echo \
  "deb [arch=$(dpkg --print-architecture) signed-by=/etc/apt/keyrings/docker.gpg] https://download.docker.com/linux/ubuntu \
  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null

sudo apt-get update

sudo apt-get install docker-ce docker-ce-cli containerd.io docker-compose-plugin
```

# Comandos Docker

Dando permissão ao docker para ser executado pelo usuario comum, dessa forna não é necessário executar **sudo** antes das execuções do docker.
```PowerShell
sudo usermod -aG docker eduardo
```


INICIANDO O DOCKER
```PowerShell
sudo service docker start
```

ALTERAR DONO DAS SPASTAS
```PowerShell
sudo chown 1000:1000 -R sigim-api
```

ENTRAR NO CONTAINER
```PowerShell
docker exec -it api_sigim bash
```

LISTAR CONTAINER
```PowerShell
docker ps
docker ps -a
```

LISTAR IMAGENS
```PowerShell
docker images
```

PARAR CONTAINERS
```PowerShell
docker stop id_container
```

REMOVER CONTAINER
```PowerShell
docker rm id_container
```

REMOVER IMAGENS
```PowerShell
docker rmi id_imagem
```

# Comandos Docker Compose

Comandos para gerar a imagem, levantar e indisponibilizar os contaners respectivamente.

```PowerShell
docker compose build
```

```PowerShell
docker compose up -d
```

```PowerShell
docker compose down
```