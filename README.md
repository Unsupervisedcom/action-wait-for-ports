<!-- start title -->

# GitHub Action:Wait for ports

<!-- end title -->
<!-- start description -->

Waits for ports to be available

<!-- end description -->
<!-- start contents -->
<!-- end contents -->
<!-- start usage -->

```yaml
- uses: Unsupervisedcom/action-wait-for-ports@undefined
  with:
    # Comma separated list of ports to wait for
    ports: ""

    # Max time in milliseconds to wait
    # Default: 30000
    max-wait: ""

    # How frequently to check ports, in milliseconds
    # Default: 5000
    check-interval: ""
```

<!-- end usage -->
   <!-- start inputs -->

| **Input**            | **Description**                                | **Default** | **Required** |
| :------------------- | :--------------------------------------------- | :---------: | :----------: |
| **`ports`**          | Comma separated list of ports to wait for      |             |   **true**   |
| **`max-wait`**       | Max time in milliseconds to wait               |   `30000`   |  **false**   |
| **`check-interval`** | How frequently to check ports, in milliseconds |   `5000`    |  **false**   |

<!-- end inputs -->
   <!-- start outputs -->

| **Output** | **Description**         | **Default** | **Required** |
| :--------- | :---------------------- | ----------- | ------------ |
| `time`     | The time we greeted you |             |              |

<!-- end outputs -->
   <!-- start examples -->

### Example usage

```yaml
on: [push]

jobs:
  hello_world_job:
    runs-on: ubuntu-latest
    name: A job to say hello
    steps:
      - name: Hello world action step
        id: hello
        uses: Unsupervisedcom/action-wait-for-ports@v1
        with:
          who-to-greet: "Mona the Octocat"
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```

<!-- end examples -->
<!-- start [.github/ghdocs/examples/] -->
<!-- end [.github/ghdocs/examples/] -->
