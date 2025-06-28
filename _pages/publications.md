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

- G. Yu, **S. Chae**, K. Bae, and S. Moon, Formal Specification of Trusted Execution Environment APIs, International Conference on Fundamental Approaches to Software Engineering (FASE), 2024 [Link](https://link.springer.com/chapter/10.1007/978-3-031-57259-3_5)

- J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction for Formally Verifying Deep Neural Networks, Korea Software Congress (KSC), Dec 20-22, 2021 (in Korean) (**Best paper award**) [Link](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11035647)

- J. Yeon, **S. Chae**, and K. Bae, Layered Abstraction Technique for Effective Formal Verification of Deep Neural Networks, Journal of KIISE, Vol. 49, No. 11, Nov 2022 (in Korean) (**Excellent paper award**) [Link](https://www.dbpia.co.kr/journal/articleDetail?nodeId=NODE11158124)


{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}