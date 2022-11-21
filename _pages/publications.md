---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if author.googlescholar %}
  You can also find my articles on <u><a href="{{author.googlescholar}}">my Google Scholar profile</a>.</u>
{% endif %}

{% include base_path %}

Domestic Journal Papers
-----------------------
[1] J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction Technique for Effective Formal Verification of Deep Neural Networks, Journal of KIISE, Vol. 49, No. 11, Nov 2022


Domestic Conference Papers
--------------------------
[1] J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction for Formally Verifying Deep Neural Networks, Korea Software Congress (KSC), Dec 20-22, 2021 (**Best paper award**)

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
