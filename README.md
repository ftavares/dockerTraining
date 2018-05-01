# Docker

## Docker Build

### Usage

```bash
docker build -t "Image's name*" "Dockerfile location"
```

### Options

Parameter     | Short         | Description |
:-------------|:--------------|-----------|
--tag         | -t            |  Name and optionally a tag in the ‘name:tag’ format |

### Example

```bash
    > docker build -t nodeapi    .
    > docker build -t angularapp .
```

---

## Docker Run

### Usage

```bash
docker run -d --name "Container's name" -p "Port on local machine":"Port exposed on docker"  "Docker image's name"
```

### Options

Parameter     | Short         | Description |
:-------------|:--------------|-----------|
--detach      | -d            |  Run container in background and print container ID |
--name        | ---           |  Assign a name to the container |
--publish     | -p            |  Publish a container’s port(s) to the host |

### Example

```bash
    > docker run -d --name webapi  -p 5001:3000 nodeapi
    > docker run -d --name apptest -p 5002:80   angularapp
```

---

## Usefull Command

- Delete a Container

  - If the container is running:

        docker rm -f [ContainerName]

        or

        docker stop  [ContainerName]
        docker rm [ContainerName]

  - If the container is stopped:

        docker rm [ContainerName]

- Delete a Image

  - If the image have dependented images running:

        docker rmi -f [ImageName]

  - If the image doesn't have dependents images running:

        docker rmi [ImageName]

- To Run The App

    ```bash
        From a bash terminal on the main directory run: ./publishAll.sh
    ```

     Navigate to [Angular App](http://localhost:5002) or [Web Api](http://localhost:5001)
