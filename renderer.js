const information = document.getElementById('info');
information.innerText = `This app is using such versions:\nNode: ${versions.node()}\nChrome: ${versions.chrome()}\nElectron: ${versions.electron()}\nPlatform: ${versions.platform()}\nArchitecture: ${versions.arch()}`;

const foo = async () => {
  const response = await versions.ping();
  console.log(response);
};

foo();
