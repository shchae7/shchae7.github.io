---
layout: archive
title: "Awards"
permalink: /awards/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

Domestic Conference
--------------------------
[1] Journal of KIISE, Excellent paper award, 2022
  - J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction Technique for Effective Formal Verification of Deep Neural Networks

[2] Korea Software Congress (KSC), Best paper award, 2021
  - J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction for Formally Verifying Deep Neural Networks


Scholarship & Fellowship
--------------------------
[1] ETAPS 2024 Student Scholarship, 02.2024
  - Awarded by ETAPS e.V. and University of Luxembourg

[2] Bang Seung-yang Graduate Fellowship, 2022
  - Graduate fellowship awarded by Departement of Computer Science and Engineering, POSTECH

[3] Global Leadership Program (GLP), 03.2020, 09.2020
  - Undergraduate scholarship for academic excellence awarded by Department of Computer Science and Engineering, POSTECH


Domestic Workshop
--------------------------
[1] Summer STAAR Workshop, Best presentation award, 2022
  - **S. Chae**, and K. Bae, Conflict-Driven Neural Network Verification

[2] Winter STAAR Workshop, Best presentation award, 2024
  - **S. Chae**, and K. Bae, Extracing UNSAT Configuration's Core

[3] Winter Software Disaster Research Center for Agile & Automated Response & Repair ([STAAR](https://staar2021.github.io/index.html)) Workshop, Distinguished presentation award, 2022
  - **S. Chae**, and K. Bae, Neural Network Verification using Unsat Configuration


{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}