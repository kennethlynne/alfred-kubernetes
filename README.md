# alfred-kubernetes [![CircleCI](https://circleci.com/gh/kennethlynne/alfred-kubernetes/tree/master.svg?style=svg)](https://circleci.com/gh/kennethlynne/alfred-kubernetes/tree/master)

> Alfred workflow to manage a kubernetes cluster


## Install

```
$ npm i -g alfred-kubernetes
```

*Requirements:*
 * [Node.js](https://nodejs.org) 7+
 * Alfred [Powerpack](https://www.alfredapp.com/powerpack/)
 * Kubernetes is already installed and configured (uses kubectl behind the scenes)

## Features

```
portforward <name of pod> <port>
```
Will port forward a pod on a designated port

![portforward name port](screenshots/portforward1.png "Port forward a pod on a designated port")

Press enter (or tab to edit port) and it will forward the pod

![portforward name port](screenshots/portforward2.png "Port forward a pod on a designated port")

```
kubernetes ui
```
Will run kubectl proxy and open the dashboard in the default browser

```
context
```
Will list available contexts and let you switch context

## License

MIT © [Kenneth Lynne](http://kenneth.ly)
