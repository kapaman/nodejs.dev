---
title: Meltdown and Spectre - Impact On Node.js
blogAuthors: ['mhdawson']
category: 'vulnerabilities'
---

# Summary

Project zero has recently announced some new attacks that have received a
lot of attention:
<https://googleprojectzero.blogspot.ca/2018/01/reading-privileged-memory-with-side.html>.

The risk from these attacks to systems running Node.js resides in the
systems in which your Node.js applications run, as opposed to the
Node.js runtime itself. The trust model for Node.js assumes you are
running trusted code and does not provide any separation between code
running within the runtime itself. Therefore, untrusted code that
would be necessary to execute these attacks in Node.js could already
affect the execution of your Node.js applications in ways that
are more severe than possible through these new attacks.

This does not mean that you don't need to protect yourself from
these new attacks when running Node.js applications. If an attacker
manages to run malicious code on an unpatched OS (whether using
JavaScript or something else) they may be able to access memory and or
data that they should not have access to. In order to protect yourself
from these cases, apply the security patches for your operating
system. You do not need to update the Node.js runtime.

## Contact and future updates

The current Node.js security policy can be found at <https://github.com/nodejs/node/blob/HEAD/SECURITY.md#security>.

Please contact <security@nodejs.org> if you wish to report a vulnerability in Node.js.

Subscribe to the low-volume announcement-only nodejs-sec mailing list at
<https://groups.google.com/forum/#!forum/nodejs-sec> to stay up to date
on security vulnerabilities and security-related releases of Node.js and
the projects maintained in the [nodejs GitHub organization](https://github.com/nodejs/).
