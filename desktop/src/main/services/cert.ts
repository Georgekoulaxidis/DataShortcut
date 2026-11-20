import selfsigned, { CertificateField, SelfsignedOptions } from 'selfsigned'

const notBefore = new Date();
const notAfter = new Date(notBefore)
notAfter.setFullYear(notAfter.getFullYear() + 2)
const attrs = [{name: 'commonName', value: 'localhost'}]
const options: SelfsignedOptions = {
    keyType: 'rsa',
    keySize: 2048,
    algorithm: 'sha256',
    notBeforeDate: notBefore,
    notAfterDate: notAfter,
    extensions: [
        { name: 'basicConstraints', cA: false },
        { name: 'keyUsage', digitalSignature: true, keyEncipherment: true },
        { name: 'extKeyUsage', serverAuth: true }
    ]
}

const pems = async() => { await selfsigned.generate(attrs, options) }

function createCertificate(): void {
    //TODO: Check safeStorage for cert. If it doesn't exist create one
}



