<!-- start title -->

# GitHub Action:Hello World

<!-- end title -->
<!-- start description -->

Greet someone and record the time

<!-- end description -->

# Important CI Note!

If you're seeing the error `The local branch master is behind the remote one, therefore a new version won't be published` in your repository that's based on this repository, it's usually because the `repository.url` in package.json is still referencing this git repository. Semantic release compares to this for node projects, sees that the history is different, and will fail. Simply update your package.json to correctly point to your repository.

<!-- start contents -->
<!-- end contents -->
<!-- start usage -->

```yaml
- uses: Unsupervisedcom/action-javascript-action-template@undefined
  with:
    # Who to greet
    # Default: World
    who-to-greet: ""
```

<!-- end usage -->
   <!-- start inputs -->

| **Input**          | **Description** | **Default** | **Required** |
| :----------------- | :-------------- | :---------: | :----------: |
| **`who-to-greet`** | Who to greet    |   `World`   |   **true**   |

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
        uses: Unsupervisedcom/action-javascript-action-template@v1
        with:
          who-to-greet: "Mona the Octocat"
      # Use the output from the `hello` step
      - name: Get the output time
        run: echo "The time was ${{ steps.hello.outputs.time }}"
```

<!-- end examples -->
<!-- start [.github/ghdocs/examples/] -->
<!-- end [.github/ghdocs/examples/] -->
