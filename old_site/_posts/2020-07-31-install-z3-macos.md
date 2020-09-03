---
layout: post
title: "Installing Z3 Theorm Prover on MacOS"
date: 2020-07-31
media: Medium
ori_url: https://medium.com/@seunghyunchae7/installing-z3-theorem-prover-on-macos-bcc0b28bd485
---

Z3 Theorem Prover is one of the most-used satisfiability modulo theories (SMT) solver by Microsoft and can be found in Github

https://github.com/Z3Prover/z3.git

Z3 theorem can be used via online through the rise4fun site.

https://rise4fun.com/Z3

For simple projects and codes, working through the site might be enough, but when working on large projects or when offline uses are needed, building and installing on a computer might be necessary.

When trying to build/install, the README file provided might be confusing (it did for me). And for those people, here is a simplified version on how to build and install the Z3 theorem prover on MacOS.

In this article, Z3 prover is built/installed in such a way that C, C++, Python APIs are provided.

1. Build using make and GCC/Clang
```
git clone https://github.com/Z3Prover/z3.git
cd z3
python3 scripts/mk_make.py --python
cd build
make
sudo make install
```

2. Install the Python wrapper
```
pip3 install z3-solver
```

3. Check if install correctly\
To check whether or not everything went smoothly, execute an example python code provided in the examples/python directory

```
python3 examples/python/example.py
```

After checking there are no errors on executing the example.py (and there shouldn’t be any), it’s good to go and you can start using the Z3 Theorem Prover!

<br>
(Any comments or constructive criticisms are always welcome!)
