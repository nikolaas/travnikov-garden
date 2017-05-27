export function mergeClasses() {
    const classes = Array.prototype.slice.call(arguments);
    return classes.filter(className => className != null).join(' ');
}