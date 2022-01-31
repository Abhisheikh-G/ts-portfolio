---
title: 'Experimenting With Rust And WebAssembly'
date: 'January 30, 2022'
excerpt: 'I experimented with Rust and WebAssembly by building a snake game in the browser. Heres what I learned.'
cover_image: '/images/posts/chandler-cruttenden-crab.webp'
category: 'Rust'
author: 'Abhisheikh'
---

> _You can’t connect the dots looking forward; you can only connect them looking backward. So you have to trust that the dots will somehow connect in your future. You have to trust in something–your gut, destiny, life, karma, whatever. This approach has never let me down, and it has made all the difference in my life._
>
> -- Steve Jobs

I've been programming for the last few years primarily in web development, so it's not too often I get to use a powerful low-level programming language like Rust. I've always been curious about it after seeing it win most
beloved programming language on Stack Overflow surveys [year](https://insights.stackoverflow.com/survey/2020?utm_source=twitter&utm_medium=social&utm_campaign=dev-survey-2020#technology-most-loved-dreaded-and-wanted-languages-loved) after [year](https://insights.stackoverflow.com/survey/2021#technology-most-loved-dreaded-and-wanted). I was fascinated to learn I could use Rust code in the frontend by compiling Rust code into WebAssembly so I dove in head first and created a [snake game](https://rust-snake-game.herokuapp.com/) to see how it all worked.

### Why Rust? Why WebAssembly?

There are numerous articles that talk about why [so many developers love Rust](https://stackoverflow.blog/2020/06/05/why-the-developers-who-use-rust-love-it-so-much/) and understandably so. Rust is a modern programming language designed for powerful type safety, fearless concurrency, and unparalled performance. That's nice and all but how does that help web developers? With Rust's excellent tooling, we can compile our Rust code down to WebAssembly which aims to perform at near native code. JavaScript is an amazing language and I'm sure we all have a special place for it in our hearts but there is a limit to what an interpreted language can do.

There are [many use cases](https://webassembly.org/docs/use-cases/) for WebAssembly like image proccessing, music applications, CAD applications, and so many other uses. There are so many success stories from companies like [Figma](https://www.figma.com/blog/webassembly-cut-figmas-load-time-by-3x/) and [Vercel](https://nextjs.org/blog/next-11-1#adopting-rust-based-swc) that it's easy to see why many are turning to Rust and WebAssembly to innovate new solutions on the web.

### Building the Snake Game

As part of my initial foray into Rust, I signed up for a [course on Udemy](https://www.udemy.com/course/rust-webassembly-with-js-ts-the-practical-guide/). The entire [logic of the game](https://github.com/Abhisheikh-G/rust_wasm_ts_snake_game/blob/main/src/lib.rs) was built in Rust and then compiled down into WebAssembly. One of the perks of using Rust is that the tooling, wasm-pack, generates all of the necessary TypeScript definitions and files based off of the types found in the Rust code. Importing our new wasm modules is a trivial task:

```javascript
import init, { World, Direction, GameStatus } from "snake_game";

init().then((wasm) => {
  // use wasm modules here
}    

```

You can see the [full example here](https://github.com/Abhisheikh-G/rust_wasm_ts_snake_game/blob/main/www/index.ts). Aside from the logic within Rust, once all of the modules are imported into JavaScript there isn't anything special you need to do. I think this makes using WebAssembly incredibly powerful because only pieces of an application can be surgically replaced with WebAssembly code to maximize performance and open up new possibilities.

There is definitely a slight shock when you first start coding in Rust after working with JavaScript for so long. It wasn't all too bad for me since I'm familiar with other languages like Java and C#. Rust actually feels modern after writing it for a bit and I have to say there's something elegant about it. One thing I noticed is that the compiler is so amazing at pointing out what's wrong. It's like having a coach right there next to you, yelling in your ear about the error on line 52.

### The Cons

Besides Rust having it's own quirks and a steep learning curve compared to other languages, I don't see much of a downside. It's powerful type-system is something special and the modern syntax feels right at home for a JavaScript/TypeScript developer.

### Where To From Here?

I've already built a small web server with Rust for a to-do application but now I'm interested in building a robust web service with Rust, completed with authentication and GraphQL. It's clear to see Rust is here to stay and so many are finding excellent use for it in their codebase. I'm now closely following the development of [the Actix web framework](https://actix.rs/) and am so excited to build some new cool stuff.
