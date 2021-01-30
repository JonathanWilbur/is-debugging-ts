// Credit to https://stackoverflow.com/a/45074641.
export default Boolean(
    (typeof global.v8debug === "object")
    || /--debug|--inspect/.test(process.execArgv.join(" ")),
);
