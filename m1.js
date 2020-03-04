function def() {
  return 'default'
}

function notDef() {
  console.log(2)
}

export { notDef };
export default def;
