const setOutput = (name: string, value: string) =>
  `::set-output name=${name}::${value}`;

const stdout = (value: string) => console.log(value);

stdout(setOutput("foo", "Foo"));
stdout(setOutput("bar", "Bar"));
