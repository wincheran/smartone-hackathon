# Data-driven Chatbot Platform

![chatbot](https://github.com/AndersonChoi/smartone-hackathon/screenshoot/bot-screenshot.png)

## Description

A service provided by Chatbot for home residents. The benefits of this service include:

From the customer's perspective, this service can increase the customer value and satisfaction of resident's home. Unlike other services, software-based services offer a cost advantage and eliminate stress on installation, etc. In addition, it is expected that there will be no difficulty in using multiple features as they are available on a text-based basis in the familiar chat UI.

From a service provider's perspective, the data collected from chatbot services can be quantified and shown to play a key role in service operations. It can help service providers decide which services are preferred and where to put more resources.

We implemented chatbot using AWS Lex and mongoDB as database. We used influxdb for dashboard, and grafana for dashboard ui. And we used aws flex sdk for javascript to implement web chat bots and aws ec2 for computing power.


## Architecture

![architecture](https://github.com/AndersonChoi/smartone-hackathon/screenshoot/architecture.png)

## Technical info

- aws lex sdk for javascript(web chatbot)
- aws lex(chatbot platform)
- aws ec2
- mongodb (database)
- influxdb (dashboard)
- grafana (dashboard ui)