# <img src="./icon.png" width="25" height="25"> alfred-kubernetes [![CircleCI](https://circleci.com/gh/kennethlynne/alfred-kubernetes/tree/master.svg?style=svg)](https://circleci.com/gh/kennethlynne/alfred-kubernetes/tree/master) [![npm version](https://badge.fury.io/js/alfred-kubernetes.svg)](https://badge.fury.io/js/alfred-kubernetes) [![GitHub license](https://img.shields.io/github/license/kennethlynne/alfred-kubernetes.svg)](https://github.com/kennethlynne/alfred-kubernetes/blob/master/license) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

> Alfred workflow to manage a Kubernetes cluster


## Install

```
$ npm i -g alfred-kubernetes
```

*Requirements:*
 * [Node.js](https://nodejs.org) 7+
 * Alfred [Powerpack](https://www.alfredapp.com/powerpack/)
 * Kubernetes is already installed and configured (uses kubectl behind the scenes)

## Features

__kube__: List of available commands

![kube](screenshots/kube.png "Main menu")

__kube portforward__ *[name of pod]* *[port]*: List containers that expose a port and forward it

![portforward name port](screenshots/portforward.png "Port forward a pod on a designated port")

__kube ui__: Will run kubectl proxy and open the dashboard in the default browser

__kube context__ *[name]*: List available contexts and let you switch between them

![context](screenshots/context.png "Switch contexts easily")

## License

MIT © [Kenneth Lynne](http://kenneth.ly)
