# Resource Guru flatten deep challenge

`nice-flatten-deep.js` is my first attempt, it is a simple and fairly eloquent solution to the problem using `reduce` recursively
to concatenate arrays together to achieve a deep flatten.

I've taken the oppourtunity to learn something in this task by having another stab and trying to write something that can
outperform the first attempt in terms of raw execution speed performance...

`faster-flatten-deep.js` takes the same concepts as the first one but transposes them into a while loop, this results in a 
perf boost being nearly twice as fast. I believe this to be because of the various overheads of callback handling 

niceFlattenDeep x 136,997 ops/sec ±0.90% (60 runs sampled)

fasterFlattenDeep x 249,546 ops/sec ±0.59% (67 runs sampled)

![Image](https://i.imgur.com/lkotOgZ.png)

In a real world application I imagine the first one is fine though, again just took a quick opportunity to learn something, thanks :)
