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
    > docker build -t nodeapi .
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
    > docker run -d --name webapi1 -p 5001:3000 nodeapi
```

---
