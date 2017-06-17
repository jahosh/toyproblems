const determineLongerStr = (a, b) => {
  let longerStr = a.length > b.length ? a : b;
  let shorterStr = longerStr === a ? b : a;
  let insert = false;

  for (let i = 0; i < longerStr.length; i++) {
    if (longerStr[i] !== shorterStr[i] && !insert) {
      shorterStr = shorterStr.split("")
      shorterStr.splice(i, 0, longerStr[i]);
      shorterStr = shorterStr.join("");
      insert = true;
    }

    if (longerStr[i] !== shorterStr[i] && insert) {
      return false;
    }
  }

  return true;
}

const determineSameLength = (a, b) => {
  let ec = 0;
  let oneAway = true;

  a
    .split("")
    .forEach((word, i) => {
      if (b[i] !== word) {
        ec++;

        if (ec > 1) {
          oneAway = false;
        }
      }
    });
  return oneAway;
}


const oneEditAway = (str1, str2) => {
  const string1 = str1.toLowerCase();
  const string2 = str2.toLowerCase();
  let oneEditAway = true;

  if (str1.length !== str2.length) {
    oneEditAway = determineLongerStr(string1, string2);
  }

  if (str1.length === str2.length) {
    oneEditAway = determineSameLength(string1, string2);
  }

  return oneEditAway;
}


oneEditAway("Pale", "Bale"); // True
oneEditAway("Pale", "Ple"); // True
oneEditAway("Pale", "Bale"); // True
oneEditAway("Pale", "Bake"); // False
