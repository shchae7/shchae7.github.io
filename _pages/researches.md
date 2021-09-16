---
layout: archive
title: "Researches"
permalink: /researches/
author_profile: true
redirect_from:
  - /research
---

{% include base_path %}

My areas of interest include DNN(Deep Neural Network) verification, constraint/contractor programming, and automated reasoning.

- Logical Node Selection Heuristic for Refinement using Spurious Counterexample
  - Research Project II
  - Key Topic: DNN Verification
  - Researched methods to utilize spurious counterexamples detected during node split refinement for more efficient branching/node selection heuristic
  - Slide: [Link]({{site.baseurl}}/pdfs/node-selection-heuristic-spurious-counterexample.pdf)
  - Report: [Link]({{site.baseurl}}/pdfs/Final_Report_node_selection.pdf)
  - 03.2021 ~ 07.2021


- Comparing DNN Verification Techniques and Approaches
  - Research Project I & Software Verification Lab Research Fellowship Research
  - Key Topic: DNN Verification
  - Researched different DNN verification methods (Reluplex, Marabou, DeepPoly, Neurify, ImageStar) and compared them based on utilized analysis approaches (Reachability, Optimization, Search), completeness, soundness, and system/property constraints. 
  - Slide: [Link]({{site.baseurl}}/pdfs/3_Final_Report.pdf)
  - Report: [Link]({{site.baseurl}}/pdfs/DNN_Verification_Methods_Analysis.pdf)
  - 11.2020 ~ 02.2021


- DNN Verification using Combination of SMT and Abstract Transformers
  - Software Verification Lab Research Fellowship Research
  - Key Topic: DNN Verification, Satisfiability Modulo Theories, Abstract Domain, First-Order Logic
  - Researched a DNN verification method through the combination of SMT and abstract domain/interpreter. And through that methond verifying robustness of FCNN, CNN architectures.
  - Github Repo: [veriDNN](https://github.com/shchae7/veriDNN)
  - 06.2020 ~ 10.2020


- Modeling and Validation of Raft Using Maude
  - Software Verification Lab Research Fellowship Research
  - Key Topic: Rewriting Logic, Model Checking, Maude
  - Modeled Raft, a consensus algorithm using Maude. Verified Raft algorithm properties, 'election safety', 'log matching', and 'state machine safety'.
  - Github Repo: [raft_maude](https://github.com/shchae7/raft_maude)
  - Slide: [Link]({{site.baseurl}}/pdfs/modeling-and-validation-of-raft-using-maude.pdf)
  - 12.2019 ~ 02.2020


- Development of TTS Service App with Small Quantities of Voice Data
  - POSTECH Undergraduate Research Program
  - Key Topic: Text-to-Speech, Tacotron2, Wavenet
  - Developed an app that provides Korean TTS service with minimal amounts of voice data required, utilizing tacotron2 and voice data augmentation.
  - Github Repo: [Link](https://github.com/shchae7/UGRP)
  - Slide: [Link]({{site.baseurl}}/pdfs/UGRP_final_poster.pdf)
  - 06.2020 ~ 01.2021


- Handwritten Math Formula Recognition
  - CSED441 'Introduction to Computer Vision' Term Project
  - Key Topic: Optical Character Recognition, Image-to-Markup
  - Applied pre-existing methods designed for printed text recognition to handwritten math formula recognition. Specifically based on a model from the paper ['What You Get Is What You See: A Visual Markup Decompiler'](https://arxiv.org/pdf/1609.04938v1.pdf)
  - Github Repo: [im2latex](https://github.com/shchae7/im2latex)
  - Paper: [Link]({{site.baseurl}}/pdfs/handwritten-math-formula-recogntion.pdf)