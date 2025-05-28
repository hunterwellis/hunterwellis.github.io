+++
title = "UR3e Digital Twin for Lab Automation"
date = "2025-05-26"

[taxonomies]
# tags=["documentation"]

[extra]
# repo_view = true
# comment = true
+++
# Why?
I think that the work being done at Radical AI is awesome and I would love to be a part of it. I wrote and desgined this in two days as a skills demo. Imagine what I could do if I worked on this full time.

# What is this?
A software-based digital twin of a Universal Robots UR3e robotic arm for detecting errors, collecting hardware data, and remote monitoring. This twin visualizes the robot's real-time joint positions, servo torques, tool center point (TCP), and any other sensor feedback--providing a live, interactive model of what the robot is doing at any moment in the lab. I wrote this in Python and C++ with KiCAD for schematic capture.

This project includes:
- A 3D visualization (RViz).
- A ROS2 (Jazzy + Gazebo) backend that streams/simulates <br> the actual and predicted robot state data.
- A Qt dashboard for monitoring robot telemetry.
- (MoveIt! configurations for trajectory planning.)
- Electrical schematics for signal conditioning.

<img src="/images/ur3e.png" height="400" width=auto style="float: left; margin-left: 175; margin-right: auto; display: block;">
<img src="/images/ur3e_robotiq.png" height="400" width=auto style="float: right; margin-left: auto; margin-right: 150; display: block;">
<div style="clear: both;"></div>
<center>
    <i>Digital Twin</i>
</center>


# Digital Twin
I interned at a French laboratory where they used digital twins for a similar purpose, but with applications to grid forming inverters. This digital twin system can integrate into a larger laboratory twin providing fault detection, data collection, and remote monitoring for the whole laboratory. 

Position and velocity are simple to log.

A headless Gazebo Harmonic sim was set up to simulate the motor joint torques.

<center>
    <img src="/images/gazebo.png" height="400" width=auto alt="ur3e rviz">
    <br>
    <i>Gazebo Sim</i>
</center>


## Visualization
Visualization of the digital twin is handled in RViz, this integrates nicely with ROS2. Through the Qt GUI users can toggle between the real position given via real telemetry data from the lab and the simulated/projected trajectory.

<center>
    <img src="/images/ur3e_rviz.png" height="400" width=auto alt="ur3e rviz">
    <br>
    <i>UR3e + Robotiq Gripper (RViz)</i>
</center>

## Qt Dashboard
The planned trajectory and telemetry data is displayed in real-time for monitoring. Error values are also computed and error margins can easily be defined and detected. The Qt Dashboard also allows the user to toggle between visualization of the planned and actual trajectory along with a dropdown menu to select the parameter they would like to monitor. Data is timestamped and stored in a CSV file for post-processing and logging.

Of course, I can only simulate telemetry data here.
<center>
    <img src="/images/dashboard.png" alt="ur3e dashboard">
    <br>
    <i>UR3e Qt dashboard (left) with RViz (Right)</i>
</center>


## Sensors Fusion
It is impossible to prevent anomalies if we cannot percieve the causes, thus with more sensors availabe analyzing data and prevent anomalies is more .

# Extended Kalman Filtering

# Appendix

I should also note that stepper motors can be easily added to this digital twin. For stepper position tracking a neodymium magnet can be attached to the motor shaft and the position value measured via a magnetic encoder.

<img src="/images/encoder_mount.png" height="400" width=auto style="float: left; margin-left: auto; margin-right: auto; display: block;">
<img src="/images/magnet_stepper.png" height="400" width=auto style="float: right; margin-left: auto; margin-right: auto; display: block;">
<div style="clear: both;"></div>

<center>
    <i>3D printed encoder mount and neodymium magnet attachment.</i>
</center>
