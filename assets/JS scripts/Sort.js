export default function Sort() {
    var sortOrder = 1;
    return function(a, b) {
        if (sortOrder == -1) {
            return b["Title"].localeCompare(a["Title"]);
        } else {
            return a["Title"].localeCompare(b["Title"]);
        }
    }
}
