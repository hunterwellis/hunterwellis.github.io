+++
title = "LQI Rocket"
description = "Landing a simulated rocket in MATLAB using optimal control."
weight = 0

[extra]
local_image = "/projects/rocket_LQI.gif"
+++

In this project I design a [LQI (Linear Quadratic Integral)]((https://www.mathworks.com/help/control/ref/ss.lqi.html)) controller in MATLAB to simulate the landing of a rocket. This was my final project for one of my graduate school courses *Applied Linear Systems*. 

From non-linear ODEs describing the rockets dynamics -- I linearized the model and designed an appropriate LQI controller to safely land the rocket in the simulation.

Linearized rocket equations:
$$M\ddot{y}(t)=F_{ss}+f(t)-\alpha\dot{y}(t)-Mg$$
$$J\ddot{\theta}(t)=T_{ss}+\tau(t)-\beta\dot{\theta}(t)$$
$$M\ddot{x}(t)=-F_{ss}\theta(t)-\gamma\dot{x}(t)$$
<br>

LQI controllers are an type of optimal control that is similar to [LQR (Linear Quadratic Regulator)](https://en.wikipedia.org/wiki/Linear%E2%80%93quadratic_regulator) controllers. In essence LQI is just LQR with the addition of a integral term. This integral term allows for better point tracking.

Here are the results:

<img src="../rocket_LQI.gif" height="350" width=auto style="margin-left: auto; margin-right: auto; display: block;">

<center>Landing the rocket at the origin.</center>
<br>

<img src="../LQI_trajectory_landing.gif" height="350" width=auto style="float: left; margin-left: auto; margin-right: auto; display: block;">
<img src="../LQI_trajectory_graphs.jpg" height="350" width=auto style="float: right; margin-left: auto; margin-right: auto; display: block;">
<div style="clear: both;"></div>

<center>Landing the rocket in <i>chopsticks</i>, based on a simple flight trajectory.</center>
