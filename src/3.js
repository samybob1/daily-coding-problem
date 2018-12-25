class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

const serialize = root => {
  let output = "";

  if (root) {
    output += `${root.val};`;
    output += serialize(root.left);
    output += serialize(root.right);
  } else {
    output += "null;";
  }

  return output;
};

const deserialize = input => {
  const values = input.slice(0, -1).split(";");
  let index = 0;

  const read = () => {
    if (values[index] === "null") {
      index++;
      return null;
    }

    return new Node(values[index++], read(index), read(index));
  };

  return read();
};

// Tests
function test(node) {
  const serialized = serialize(node);
  const deserialized = deserialize(serialized);

  console.log("serialized 1 time: ", serialized);
  console.log("serialized 2 times:", serialize(deserialized));
  console.log(
    `deserialize(serialize(node)).left.left.val === 'left.left'?`,
    deserialized.left.left.val === "left.left"
  );
}

const node = new Node(
  "root",
  new Node("left", new Node("left.left")),
  new Node("right")
);

test(node);
