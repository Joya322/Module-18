var workList = [
  "১) রাত ৮ টা বাজে মডিউল আনলক করো",
  "২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো",
  "৩) ভিডিও দেখতে দেখতে নোটস নাও",
  "৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো",
  "৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো",
];

var count = 1;
for (var i = 0; i < workList.length * 2; i++) {
  if (i == workList.length) {
    i = -1;
    count++;
    if (count == 3) {
      break;
    }
  } else {
    console.log(workList[i]);
  }
}
