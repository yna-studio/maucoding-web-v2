export function stripTags(str = "") {
  try {
    if (!str || typeof str != "string") return str;
    return str.replace(/(<([^>]+)>)/gi, "");
  } catch (e) {
    console.error(e);
  }
}

export function objToQuery(obj) {
  try {
    let str = [];
    for (let p in obj) {
      if (obj.hasOwnProperty(p))
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
    return str.join("&");
  } catch (e) {
    console.error(e);
  }
}

export function queryToObj(str) {
  try {
    let b = {};
    if (str[0] === "?") str = str.replace("?", "");
    // ref:https://stackoverflow.com/questions/4607745/split-string-only-on-first-instance-of-specified-character/36263419?utm_medium=organic&utm_source=google_rich_qa&utm_campaign=google_rich_qa
    return (
      str.split("&").map(function (a) {
        (a = a.split(/=(.+)/)), (b[a[0]] = a[1]);
      }),
      b
    );
  } catch (a) {
    console.error(a);
  }
}

export function truncate(str, limit = 10, suffix = "") {
  try {
    if (typeof str != "string") return str;
    const { length } = str;
    if (limit < length) {
      let tmp_str = str.substring(0, limit);
      // alfanumeric character
      str = tmp_str.substr(
        0,
        Math.min(tmp_str.length, tmp_str.lastIndexOf(" "))
      );
    }
    return str.trim() + (length > limit ? suffix : "");
  } catch (e) {
    console.error(e);
  }
}

export function toSingleSpace(str) {
  try {
    if (!str || typeof str != "string") return str;
    str = str.trim();
    return str.replace(/\s\s+/g, " ");
  } catch (e) {
    console.error(e);
  }
}

export function toSlug(str) {
  try {
    if (!str || typeof str != "string") return str;
    str = toSingleSpace(str.trim());
    return str
      .split(" ")
      .join("-")
      .replace(/[/.,(){}]/g, "");
  } catch (e) {
    console.error(e);
  }
}
