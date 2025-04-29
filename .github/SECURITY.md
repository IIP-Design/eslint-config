# Security Policy

The Department of State is committed to ensuring the security of the American public by protecting their information. This policy is intended to give security researchers clear guidelines for conducting vulnerability discovery activities and to convey our preferences in how to submit discovered vulnerabilities to us.

## Authorization

If you make a good faith effort to comply with this policy during your security research, we will consider your research to be authorized and we will work with you to understand and resolve the issue quickly, and Department of State will not recommend or pursue legal action related to your research.

## Guidelines

Under this policy, "research" means activities in which you:

- Notify us as soon as possible after you discover a real or potential security issue.
- Make every effort to avoid privacy violations, degradation of user experience, disruption to production systems, and destruction or manipulation of data.
- Only use exploits to the extent necessary to confirm a vulnerability’s presence. Do not use an exploit to compromise or exfiltrate data, establish command line access and/or persistence, or use the exploit to pivot to other systems.
- Provide us a reasonable amount of time (typically 100 calendar days) to resolve the issue before coordinated disclosure.
- Do not submit a high volume of low-quality reports.
- Once you’ve established that a vulnerability exists or encounter any sensitive data (including Personally Identifiable Information (PII), medical information, financial information, or proprietary information or trade secrets of any party), you must stop your test, notify us immediately, and not disclose this data to anyone else.

## Supported Versions

This is the list of versions of `@gpa-lab/eslint-config` that are currently supported with security updates.

| Version | Supported |
| ------- | --------- |
| 2.x     | ✅        |
| 1.x     | ❌        |

Please note that we only commit to providing security fixes for the current major version of this package.

## Reporting a Vulnerability

To report a vulnerability, please email a detailed report to gpa-lab-devs@fan.gov. The vulnerability report should include a proof-of-concept of the exploit or replication details to help us assess the risk level. Please provide a mitigation recommendation and include any related technical information.

### Disclosure Process

- Within 7 business days, we will acknowledge that your report has been received.
- To the best of our ability, we will confirm the existence of the vulnerability to you and be as transparent as possible about what steps we are taking during the remediation process, including on issues or challenges that may delay resolution.
- We will maintain an open dialogue to discuss issues.

### Vulnerabilities in Dependencies

If you receive a security warning relative to a dependency of this package, please confirm the following before submitting a report:

1. The vulnerability affects `@gpa-lab/eslint-config`'s usage of that dependency.
1. The version of the dependency containing the security fix is not contained by the semver range used by `@gpa-lab/eslint-config`.