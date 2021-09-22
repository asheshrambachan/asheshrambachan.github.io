---
title: 
layout: single
classes: wide
permalink: /research/
---
<br/> 

# <center> Working Papers </center>
- - -

**Identifying Prediction Mistakes in Observational Data**. 2021. *Job Market Paper*. <br/>
<small>[ <a href="#/" onclick="visib('identifying-prediction-mistakes')">Abstract</a> | [Draft][identifying-prediction-mistakes] | [Supplement][identifying-prediction-mistakes-supplement] ]</small>

<div id="identifying-prediction-mistakes" style="display: none; text-align: justify; line-height: 1.2" ><small>
Decision makers, such as doctors, judges, and managers, make consequential choices based on predictions of unknown outcomes. Do these decision makers make systematic prediction mistakes based on the available information? If so, in what ways are their predictions systematically biased? Uncovering systematic prediction mistakes is difficult as the preferences and information sets of decision makers are unknown to researchers. In this paper, I characterize behavioral and econometric assumptions under which systematic prediction mistakes can be identified in empirical settings such as hiring, pretrial release, and medical testing. I derive a statistical test for whether the decision maker makes systematic prediction mistakes under these assumptions and show how supervised machine learning based models can be used to apply this test. I provide methods for conducting inference on the ways in which the decision maker's predictions are systematically biased.  As an illustration, I apply this econometric framework to analyze the pretrial release decisions of judges in New York City, and I estimate that at least 20\% of judges make systematic prediction mistakes about failure to appear risk given defendant characteristics.
</small><br><br/></div>

[identifying-prediction-mistakes]:{{ site.baseurl }}{% link assets/files/asheshr_identifyingPredictionMistakes_Main.pdf %}
[identifying-prediction-mistakes-supplement]:{{ site.baseurl }}{% link assets/files/asheshr_identifyingPredictionMistakes_Supplement.pdf %}

**An Honest Approach to Parallel Trends** (with [Jonathan Roth][jroth]). 2021.<br/>
<small>[ <a href="#/" onclick="visib('hpt')">Abstract</a> | [Draft][hpt-draft] | [Supplement][hpt-supplement] | [R package][hpt-r-package] ]</small>

<div id="hpt" style="display: none; text-align: justify; line-height: 1.2" ><small>
This paper proposes tools for robust inference for difference-in-differences and event-study designs. Instead of requiring that the parallel trends assumption holds exactly, we impose that pre-treatment violations of parallel trends (``pre-trends'') are informative about the possible post-treatment violations of parallel trends. Such restrictions allow us to formalize the intuition behind the common practice of testing for pre-existing trends while avoiding issues related to pre-testing. The causal effect of interest is partially identified under such restrictions. We introduce two approaches that guarantee uniformly valid (``honest'') inference under the imposed restrictions, and we derive novel results showing that they have good power properties in our context. We recommend that researchers conduct sensitivity analyses to show what conclusions can be drawn under various restrictions on the possible differences in trends.
</small><br><br/></div>

[hpt-draft]: {{ site.baseurl }}{% link assets/files/hpt-draft.pdf %}
[hpt-supplement]: {{ site.baseurl }}{% link assets/files/hpt-supp.pdf %}
[hpt-r-package]: https://github.com/asheshrambachan/HonestDiD

**An Economic Approach to Regulating Algorithms** (with [Jon Kleinberg][jkleinberg], [Jens Ludwig][jludwig] and [Sendhil Mullainathan][smullainathan]). 2021.<br/>
<small>[ <a href="#/" onclick="visib('regulatingalgorithms')">Abstract</a> | [Draft][regulatingalgorithms-nberwp] | [Slides][regulatingalgorithms-slides] ]</small>

<div id="regulatingalgorithms" style="display: none; text-align: justify; line-height: 1.2" ><small>
There is growing concern about "algorithmic bias" - that predictive algorithms used in decision-making might bake in or exacerbate discrimination in society. We argue that such concerns are naturally addressed using the tools of welfare economics. This approach overturns prevailing wisdom about the remedies for algorithmic bias. First, when a social planner builds the algorithm herself, her equity preference has no effect on the training procedure. So long as the data, however biased, contain signal, they will be used and the learning algorithm will be the same. Equity preferences alone provide no reason to alter how information is extracted from data - only how that information enters decision-making. Second, when private (possibly discriminatory) actors are the ones building algorithms, optimal regulation involves algorithmic disclosure but otherwise no restriction on training procedures. Under such disclosure, the use of algorithms strictly reduces the extent of discrimination relative to a world in which humans make all the decisions. 
</small><br><br/></div>

[jkleinberg]: https://www.cs.cornell.edu/home/kleinber/
[jludwig]: https://voices.uchicago.edu/jensludwig/
[smullainathan]: https://sendhil.org/
[regulatingalgorithms-nberwp]:{{ site.baseurl }}{% link assets/files/rklm-regulatingalgorithms-nberwp.pdf %}
[regulatingalgorithms-slides]:{{ site.baseurl }}{% link assets/files/rklm-regulatingalgos-slides.pdf %}

**Econometric analysis of potential outcomes time series: instruments, shocks, linearity and the causal response function** (with [Neil Shephard][nshephard]). 2020.<br/>
<small>[ <a href="#/" onclick="visib('timeseriescausality')">Abstract</a> | [Draft][timeseriescausality-arxiv] ]</small>

<div id="timeseriescausality" style="display: none; text-align: justify; line-height: 1.2" ><small>
Bojinov and Shephard (2019) defined potential outcome time series to nonparametrically measure dynamic causal effects in time series experiments. Four innovations are developed in this paper: "instrumental paths," treatments which are "shocks," "linear potential outcomes" and the "causal response function." Potential outcome time series are then used to provide a nonparametric causal interpretation of impulse response functions, generalized impulse response functions, local projections and LP-IV.
</small><br><br/></div>

[timeseriescausality-arxiv]: https://arxiv.org/pdf/1903.01637.pdf

**Design-Based Uncertainty for Quasi-Experiments** (with [Jonathan Roth][jroth]). 2020.<br/>
<small>[ <a href="#/" onclick="visib('design-based-quasi-experiment')">Abstract</a> | [Draft][design-based-arxiv] ] </small>

<div id="design-based-quasi-experiment" style="display: none; text-align: justify; line-height: 1.2" ><small>
Social scientists are often interested in estimating causal effects in settings where all units in the population are observed (e.g. all 50 US states). Design-based approaches, which view the realization of treatment assignments as the source of randomness, may be more appealing than standard sampling-based approaches in such contexts. This paper develops a design-based theory of uncertainty suitable for quasi-experimental settings, in which the researcher estimates the treatment effect as if treatment were randomly assigned, but in reality treatment probabilities may depend in unknown ways on the potential outcomes. We first study the properties of the simple difference-in-means (SDIM) estimator. The SDIM is unbiased for a finite-population design-based analog to the average treatment effect on the treated (ATT) if treatment probabilities are uncorrelated with the potential outcomes in a finite population sense. We further derive expressions for the variance of the SDIM estimator and a central limit theorem under sequences of finite populations with growing sample size. We then show how our results can be applied to analyze the distribution and estimand of difference-in-differences (DiD) and two-stage least squares (2SLS) from a design-based perspective when treatment is not completely randomly assigned.
</small><br><br/></div>

[jroth]: https://jonathandroth.github.io/
[design-based-arxiv]: https://arxiv.org/pdf/2008.00602v2.pdf

# <center> Forthcoming </center>
- - -

**Panel Experiments and Dynamic Causal Effects: A Finite Population Perspective** (with [Iavor Bojinov][ibojinov] and [Neil Shephard][nshephard]). 2021.
*Accepted for publication, Quantitative Economics*
<br/>
<small>[ <a href="#/" onclick="visib('panelexperiments')">Abstract</a> | [Draft][panelexperiments-arxiv] | [Slides][panelexperiments-slides] ]</small>

<div id="panelexperiments" style="display: none; text-align: justify; line-height: 1.2" ><small>
In panel experiments, we randomly assign units to different interventions, measuring their outcomes, and repeating the procedure in several periods. Using the potential outcomes framework, we define finite population dynamic causal effects that capture the relative effectiveness of alternative treatment paths. For a rich class of dynamic causal effects, we provide a nonparametric estimator that is unbiased over the randomization distribution and derive its finite population limiting distribution as either the sample size or the duration of the experiment increases. We develop two methods for inference: a conservative test for weak null hypotheses and an exact randomization test for sharp null hypotheses. We further analyze the finite population probability limit of linear fixed effects estimators. These commonly-used estimators do not recover a causally interpretable estimand if there are dynamic causal effects and serial correlation in the assignments, highlighting the value of our proposed estimator.
</small><br><br/></div>

[ibojinov]: https://www.hbs.edu/faculty/Pages/profile.aspx?facId=1199332
[nshephard]: https://scholar.harvard.edu/shephard/home
[panelexperiments-arxiv]: https://arxiv.org/pdf/2003.09915.pdf
[panelexperiments-slides]:{{ site.baseurl }}{% link assets/files/brs-panelexperiments-slides.pdf %}

# <center> Publications </center>
- - -

**Characterizing Fairness over the Set of Good Models under Selective Labels** (with [Amanda Coston][acoston] and [Alexandra Chouldechova][achoulde]). 2021.
International Conference on Machine Learning (ICML 2021).
<br/>
<small>[ <a href="#/" onclick="visib('fairnessovergoodmodels')">Abstract</a> | [Draft][fairnessovergoodmodels-arxiv] | [Published Version][fairnessovergoodmodels-pub] ]</small>

<div id="fairnessovergoodmodels" style="display: none; text-align: justify; line-height: 1.2" ><small>
Algorithmic risk assessments are used to inform decisions in a wide variety of high-stakes settings. Often multiple predictive models deliver similar overall performance but differ markedly in their predictions for individual cases, an empirical phenomenon known as the "Rashomon Effect." These models may have different properties over various groups, and therefore have different predictive fairness properties. We develop a framework for characterizing predictive fairness properties over the set of models that deliver similar overall performance, or "the set of good models." Our framework addresses the empirically relevant challenge of selectively labelled data in the setting where the selection decision and outcome are unconfounded given the observed data features. Our framework can be used to 1) replace an existing model with one that has better fairness properties; or 2) audit for predictive bias. We illustrate these uses cases on a real-world credit-scoring task and a recidivism prediction task.
</small><br><br/></div>

[fairnessovergoodmodels-arxiv]: https://arxiv.org/pdf/2101.00352.pdf
[fairnessovergoodmodels-pub]: http://proceedings.mlr.press/v139/coston21a.html
[acoston]: http://www.cs.cmu.edu/~acoston/
[achoulde]: http://www.andrew.cmu.edu/user/achoulde/

**An Economic Perspective on Algorithmic Fairness** (with [Jon Kleinberg][jkleinberg], [Jens Ludwig][jludwig] and [Sendhil Mullainathan][smullainathan]). 2020. AEA Papers and Proceedings, 110, Pp. 91-95.  *Non-refereed*.
<br/>
<small>[ <a href="#/" onclick="visib('econ-perspective-fairness')">Abstract</a> | [Published Version][pandp-2020] ] </small>

<div id="econ-perspective-fairness" style="display: none; text-align: justify; line-height: 1.2" ><small>
There are widespread concerns that the growing use of machine learning algorithms in important decisions may reproduce and reinforce existing discrimination against legally protected groups. Most of the attention to date on issues of "algorithmic bias" or "algorithmic fairness" has come from computer scientists and machine learning researchers. We argue that concerns about algorithmic fairness are at least as much about questions of how discrimination manifests itself in data, decision-making under uncertainty, and optimal regulation. To fully answer these questions, an economic framework is necessary—and as a result, economists have much to contribute.
</small><br><br/></div>

[pandp-2020]:{{ site.baseurl }}{% link assets/files/rklm-pandp-2020.pdf %}

**Bias In, Bias Out? Evaluating the Folk Wisdom** (with [Jonathan Roth][jroth]). 2020. 1st Symposium on the Foundations of Responsible Computing (FORC 2020), LIPIcs, 156, Pp. 6:1-6:15.
<br/>
<small>[ <a href="#/" onclick="visib('biasinbiasout')">Abstract</a> | [Draft][biasinbiasout-draft] | [Published Version][biasinbiasout-pub] ] </small>

<div id="biasinbiasout" style="display: none; text-align: justify; line-height: 1.2" ><small>
We evaluate the folk wisdom that algorithmic decision rules trained on data produced by biased human decision-makers necessarily reflect this bias. We consider a setting where training labels are only generated if a biased decision-maker takes a particular action, and so "biased" training data arise due to discriminatory selection into the training data. In our baseline model, the more biased the decision-maker is against a group, the more the algorithmic decision rule favors that group. We refer to this phenomenon as bias reversal. We then clarify the conditions that give rise to bias reversal. Whether a prediction algorithm reverses or inherits bias depends critically on how the decision-maker affects the training data as well as the label used in training. We illustrate our main theoretical results in a simulation study applied to the New York City Stop, Question and Frisk dataset.
</small><br><br/></div>

[biasinbiasout-draft]:https://arxiv.org/pdf/1909.08518.pdf
[biasinbiasout-pub]:https://drops.dagstuhl.de/opus/volltexte/2020/12022/

**Algorithmic Fairness** (with [Jon Kleinberg][jkleinberg], [Jens Ludwig][jludwig] and [Sendhil Mullainathan][smullainathan]). 2018. AEA Papers and Proceedings, 108, Pp. 22-27. *Non-refereed*.
<br/>
<small>[ <a href="#/" onclick="visib('algofairness')">Abstract</a> | [Published Version][pandp-2018] ] </small>

<div id="algofairness" style="display: none; text-align: justify; line-height: 1.2" ><small>
Concerns that algorithms may discriminate against certain groups have led to numerous efforts to 'blind' the algorithm to race. We argue that this intuitive perspective is misleading and may do harm. Our primary result is exceedingly simple, yet often overlooked. A preference for fairness should not change the choice of estimator. Equity preferences can change how the estimated prediction function is used (e.g., different threshold for different groups) but the function itself should not change. We show in an empirical example for college admissions that the inclusion of variables such as race can increase both equity and efficiency.
</small><br><br/></div>

[pandp-2018]:{{ site.baseurl }}{% link assets/files/klmr-pandp-2018.pdf %}

# <center> Work In Progress </center>

**External Instruments and Internal Instruments in Structural Estimation** (with [Isaiah Andrews][iandrews], [Nano Barahona][nbarahona], [Matthew Gentzkow][mgentzkow] and [Jesse Shapiro][jshapiro]).

[iandrews]: https://scholar.harvard.edu/iandrews/home
[nbarahona]: https://hbaraho.github.io/
[mgentzkow]: https://gentzkow.people.stanford.edu/
[jshapiro]: https://www.brown.edu/Research/Shapiro/

**Counterfactual Risk Assessments Under Confounding: Learning, Evaluation and Fairness** (with [Amanda Coston][acoston] and [Alexandra Chouldechova][achoulde]).

[//]: This java script is the button to show abstract
<script>
 function visib(id) {
  var x = document.getElementById(id);
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
</script>

[//]:&emsp;<button onclick="visib('polariz')" class="btn btn--inverse btn--small">Abstract</button>