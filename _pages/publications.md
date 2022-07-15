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

Domestic Conference Papers
--------------------------
[1] J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction for Formally Verifying Deep Neural Networks, Korea Software Congress (KSC), Dec 20-22, 2021 (**Best paper award**)

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
