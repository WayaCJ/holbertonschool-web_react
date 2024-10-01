interface MajorCredits {
    credits: number;
    brand: string; // Unique identifier for MajorCredits
}

interface MinorCredits {
    credits: number;
    brand: string; // Unique identifier for MinorCredits
}

function sumMajorCredits(subject1: MajorCredits, subject2: MajorCredits): MajorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: subject1.brand // Assuming brand is the same for both subjects
    };
}

function sumMinorCredits(subject1: MinorCredits, subject2: MinorCredits): MinorCredits {
    return {
        credits: subject1.credits + subject2.credits,
        brand: subject1.brand // Assuming brand is the same for both subjects
    };
}
