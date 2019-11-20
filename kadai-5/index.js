const profile = {
    firstname: 'Hanako',
    familyname: 'Yamada',
    age: 85,
    hobby: 'Running',
    major: 'Science'
    
}

console.log(profile)

const keys = Object.keys(profile);

for (let i = 0; i <　keys.length; i = i + 1){
  const key = keys[i];
  const value = profile[key];
  const text = "私の" + key + "は" + value + "です。";
  console.log(text);
}