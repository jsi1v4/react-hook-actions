# React Hook Actions
Tool for react with axios projects, [take a look!](https://jsi1v4.com/react-hook-actions)

## How to use

### Service
```
  const heroes: Hero[] = [
    { name: 'Peter', level: 25 },
    { name: 'Tony', level: 50 },
    { name: 'Stephen', level: 99 }
  ];

  getHeroes() {
    return httpClient<Hero[]>({ url: `/api/heroes` });
  }
```

### Component
```
  ...
    const request = useAction<Hero[]>();

    execHeroes() {
      request.exec(
        getHeroes(), // promise httpClient tool
        (response: Hero[]) => console.log('success', response),
        (error: Error) => console.log('error', error)
      );
    }
  ...
    {request.loading ? (<span>Loading...</span>) : (<></>) }
    {request.error ? (<span>Error! { request.error }</span>) : (<></>) }
    ...
      {
        request.payload?.map((row, index) => (
          <tr key={index}>
            <td>{row.name}</td>
            <td>{row.level}</td>
          </tr>
        ))
      }
    ...
```

## About
- **Author**: Jose Silva
- **Dep**: Axios(>=0.21.x)
