// Define a namespace to group Indian ID validation logic
namespace GovernmentID {

    // Private constant (not exported)
    const aadhaarLength = 12;

    // Exported function to validate Aadhaar
    export function validateAadhaar(id: string): boolean {
        const isNumeric = /^\d+$/.test(id);
        return isNumeric && id.length === aadhaarLength;
    }

    // Exported function to validate PAN
    export function validatePAN(pan: string): boolean {
        // PAN Format: 5 Alphabets, 4 Digits, 1 Alphabet
        const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
        return panRegex.test(pan.toUpperCase());
    }

    // Nested Namespace
    export namespace Tax {
        export function calculateGST(amount: number): number {
            return amount * 0.18;
        }
    }
}

// ---------------- Execution ----------------

const myAadhaar = "987654321098";
const myPAN = "PQRSX5678L";

console.log(`Is Aadhaar Valid? ${GovernmentID.validateAadhaar(myAadhaar)}`);
console.log(`Is PAN Valid? ${GovernmentID.validatePAN(myPAN)}`);

// Accessing the nested namespace
const billAmount = 2500;
const tax = GovernmentID.Tax.calculateGST(billAmount);

console.log(`GST on ₹${billAmount} is ₹${tax}`);

// ERROR DEMO
// console.log(GovernmentID.aadhaarLength);
// Error: Property 'aadhaarLength' does not exist because it is not exported.
