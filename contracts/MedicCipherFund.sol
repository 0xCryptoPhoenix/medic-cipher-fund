// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract MedicCipherFund {
    
    struct MedicalCampaign {
        uint256 campaignId;
        uint256 targetAmount;
        uint256 currentAmount;
        uint256 donorCount;
        bool isActive;
        bool isVerified;
        bool isCompleted;
        string name;
        string description;
        string medicalCategory;
        address organizer;
        address hospital;
        uint256 startTime;
        uint256 endTime;
        uint256 createdAt;
    }
    
    struct Donation {
        uint256 donationId;
        uint256 amount;
        bool isAnonymous;
        bool isVerified;
        address donor;
        uint256 campaignId;
        uint256 timestamp;
        string message;
    }
    
    struct MedicalRecord {
        uint256 recordId;
        uint256 patientAge;
        uint256 treatmentCost;
        bool isEmergency;
        bool isVerified;
        string diagnosis;
        string treatment;
        string hospitalName;
        address patient;
        address doctor;
        uint256 timestamp;
    }
    
    struct ImpactReport {
        uint256 reportId;
        uint256 patientsHelped;
        uint256 fundsUtilized;
        uint256 treatmentsCompleted;
        bool isVerified;
        string reportHash;
        string medicalOutcomes;
        address reporter;
        uint256 timestamp;
    }
    
    mapping(uint256 => MedicalCampaign) public campaigns;
    mapping(uint256 => Donation) public donations;
    mapping(uint256 => MedicalRecord) public medicalRecords;
    mapping(uint256 => ImpactReport) public impactReports;
    mapping(address => uint256) public donorReputation;
    mapping(address => uint256) public hospitalReputation;
    mapping(address => uint256) public doctorReputation;
    
    uint256 public campaignCounter;
    uint256 public donationCounter;
    uint256 public recordCounter;
    uint256 public reportCounter;
    
    address public owner;
    address public verifier;
    address public regulator;
    
    event CampaignCreated(uint256 indexed campaignId, address indexed organizer, string name, string category);
    event DonationMade(uint256 indexed donationId, uint256 indexed campaignId, address indexed donor, uint256 amount);
    event MedicalRecordAdded(uint256 indexed recordId, address indexed patient, string diagnosis);
    event ImpactReported(uint256 indexed reportId, uint256 indexed campaignId, address indexed reporter);
    event CampaignVerified(uint256 indexed campaignId, bool isVerified);
    event CampaignCompleted(uint256 indexed campaignId, uint256 totalRaised);
    event ReputationUpdated(address indexed user, uint256 reputation, string userType);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can call this function");
        _;
    }
    
    modifier onlyVerifier() {
        require(msg.sender == verifier, "Only verifier can call this function");
        _;
    }
    
    modifier onlyRegulator() {
        require(msg.sender == regulator, "Only regulator can call this function");
        _;
    }
    
    constructor(address _verifier, address _regulator) {
        owner = msg.sender;
        verifier = _verifier;
        regulator = _regulator;
    }
    
    function createCampaign(
        string memory _name,
        string memory _description,
        string memory _medicalCategory,
        address _hospital,
        uint256 _targetAmount,
        uint256 _duration
    ) public returns (uint256) {
        require(bytes(_name).length > 0, "Campaign name cannot be empty");
        require(_duration > 0, "Duration must be positive");
        require(_hospital != address(0), "Invalid hospital address");
        
        uint256 campaignId = campaignCounter++;
        
        campaigns[campaignId] = MedicalCampaign({
            campaignId: campaignId,
            targetAmount: _targetAmount,
            currentAmount: 0,
            donorCount: 0,
            isActive: true,
            isVerified: false,
            isCompleted: false,
            name: _name,
            description: _description,
            medicalCategory: _medicalCategory,
            organizer: msg.sender,
            hospital: _hospital,
            startTime: block.timestamp,
            endTime: block.timestamp + _duration,
            createdAt: block.timestamp
        });
        
        emit CampaignCreated(campaignId, msg.sender, _name, _medicalCategory);
        return campaignId;
    }
    
    function makeDonation(
        uint256 campaignId,
        bool isAnonymous,
        string memory message
    ) public payable returns (uint256) {
        require(campaigns[campaignId].organizer != address(0), "Campaign does not exist");
        require(campaigns[campaignId].isActive, "Campaign is not active");
        require(block.timestamp <= campaigns[campaignId].endTime, "Campaign has ended");
        require(msg.value > 0, "Donation amount must be greater than 0");
        
        uint256 donationId = donationCounter++;
        
        donations[donationId] = Donation({
            donationId: donationId,
            amount: msg.value,
            isAnonymous: isAnonymous,
            isVerified: false,
            donor: isAnonymous ? address(0) : msg.sender,
            campaignId: campaignId,
            timestamp: block.timestamp,
            message: message
        });
        
        // Update campaign totals
        campaigns[campaignId].currentAmount += msg.value;
        campaigns[campaignId].donorCount += 1;
        
        emit DonationMade(donationId, campaignId, msg.sender, msg.value);
        return donationId;
    }
    
    function addMedicalRecord(
        address _patient,
        address _doctor,
        string memory _diagnosis,
        string memory _treatment,
        string memory _hospitalName,
        uint256 _patientAge,
        uint256 _treatmentCost,
        bool _isEmergency
    ) public returns (uint256) {
        require(_patient != address(0), "Invalid patient address");
        require(_doctor != address(0), "Invalid doctor address");
        require(bytes(_diagnosis).length > 0, "Diagnosis cannot be empty");
        
        uint256 recordId = recordCounter++;
        
        medicalRecords[recordId] = MedicalRecord({
            recordId: recordId,
            patientAge: _patientAge,
            treatmentCost: _treatmentCost,
            isEmergency: _isEmergency,
            isVerified: false,
            diagnosis: _diagnosis,
            treatment: _treatment,
            hospitalName: _hospitalName,
            patient: _patient,
            doctor: _doctor,
            timestamp: block.timestamp
        });
        
        emit MedicalRecordAdded(recordId, _patient, _diagnosis);
        return recordId;
    }
    
    function submitImpactReport(
        uint256 campaignId,
        uint256 patientsHelped,
        uint256 fundsUtilized,
        uint256 treatmentsCompleted,
        string memory reportHash,
        string memory medicalOutcomes
    ) public returns (uint256) {
        require(campaigns[campaignId].organizer == msg.sender, "Only organizer can submit report");
        require(campaigns[campaignId].isActive, "Campaign must be active");
        
        uint256 reportId = reportCounter++;
        
        impactReports[reportId] = ImpactReport({
            reportId: reportId,
            patientsHelped: patientsHelped,
            fundsUtilized: fundsUtilized,
            treatmentsCompleted: treatmentsCompleted,
            isVerified: false,
            reportHash: reportHash,
            medicalOutcomes: medicalOutcomes,
            reporter: msg.sender,
            timestamp: block.timestamp
        });
        
        emit ImpactReported(reportId, campaignId, msg.sender);
        return reportId;
    }
    
    function verifyCampaign(uint256 campaignId, bool isVerified) public onlyVerifier {
        require(campaigns[campaignId].organizer != address(0), "Campaign does not exist");
        
        campaigns[campaignId].isVerified = isVerified;
        emit CampaignVerified(campaignId, isVerified);
    }
    
    function completeCampaign(uint256 campaignId) public onlyVerifier {
        require(campaigns[campaignId].organizer != address(0), "Campaign does not exist");
        require(campaigns[campaignId].isVerified, "Campaign must be verified");
        require(block.timestamp > campaigns[campaignId].endTime, "Campaign must be ended");
        
        campaigns[campaignId].isCompleted = true;
        campaigns[campaignId].isActive = false;
        
        emit CampaignCompleted(campaignId, campaigns[campaignId].currentAmount);
    }
    
    function updateReputation(address user, uint256 reputation, string memory userType) public onlyVerifier {
        require(user != address(0), "Invalid user address");
        
        if (keccak256(bytes(userType)) == keccak256(bytes("donor"))) {
            donorReputation[user] = reputation;
        } else if (keccak256(bytes(userType)) == keccak256(bytes("hospital"))) {
            hospitalReputation[user] = reputation;
        } else if (keccak256(bytes(userType)) == keccak256(bytes("doctor"))) {
            doctorReputation[user] = reputation;
        }
        
        emit ReputationUpdated(user, reputation, userType);
    }
    
    function getCampaignInfo(uint256 campaignId) public view returns (
        string memory name,
        string memory description,
        string memory medicalCategory,
        uint256 targetAmount,
        uint256 currentAmount,
        uint256 donorCount,
        bool isActive,
        bool isVerified,
        bool isCompleted,
        address organizer,
        address hospital,
        uint256 startTime,
        uint256 endTime
    ) {
        MedicalCampaign storage campaign = campaigns[campaignId];
        return (
            campaign.name,
            campaign.description,
            campaign.medicalCategory,
            campaign.targetAmount,
            campaign.currentAmount,
            campaign.donorCount,
            campaign.isActive,
            campaign.isVerified,
            campaign.isCompleted,
            campaign.organizer,
            campaign.hospital,
            campaign.startTime,
            campaign.endTime
        );
    }
    
    function getDonationInfo(uint256 donationId) public view returns (
        uint256 amount,
        bool isAnonymous,
        bool isVerified,
        address donor,
        uint256 campaignId,
        uint256 timestamp,
        string memory message
    ) {
        Donation storage donation = donations[donationId];
        return (
            donation.amount,
            donation.isAnonymous,
            donation.isVerified,
            donation.donor,
            donation.campaignId,
            donation.timestamp,
            donation.message
        );
    }
    
    function getMedicalRecordInfo(uint256 recordId) public view returns (
        uint256 patientAge,
        uint256 treatmentCost,
        bool isEmergency,
        bool isVerified,
        string memory diagnosis,
        string memory treatment,
        string memory hospitalName,
        address patient,
        address doctor,
        uint256 timestamp
    ) {
        MedicalRecord storage record = medicalRecords[recordId];
        return (
            record.patientAge,
            record.treatmentCost,
            record.isEmergency,
            record.isVerified,
            record.diagnosis,
            record.treatment,
            record.hospitalName,
            record.patient,
            record.doctor,
            record.timestamp
        );
    }
    
    function getImpactReportInfo(uint256 reportId) public view returns (
        uint256 patientsHelped,
        uint256 fundsUtilized,
        uint256 treatmentsCompleted,
        bool isVerified,
        string memory reportHash,
        string memory medicalOutcomes,
        address reporter,
        uint256 timestamp
    ) {
        ImpactReport storage report = impactReports[reportId];
        return (
            report.patientsHelped,
            report.fundsUtilized,
            report.treatmentsCompleted,
            report.isVerified,
            report.reportHash,
            report.medicalOutcomes,
            report.reporter,
            report.timestamp
        );
    }
    
    function getDonorReputation(address donor) public view returns (uint256) {
        return donorReputation[donor];
    }
    
    function getHospitalReputation(address hospital) public view returns (uint256) {
        return hospitalReputation[hospital];
    }
    
    function getDoctorReputation(address doctor) public view returns (uint256) {
        return doctorReputation[doctor];
    }
    
    function withdrawFunds(uint256 campaignId) public {
        require(campaigns[campaignId].organizer == msg.sender, "Only organizer can withdraw");
        require(campaigns[campaignId].isVerified, "Campaign must be verified");
        require(campaigns[campaignId].isCompleted, "Campaign must be completed");
        
        // Transfer funds to organizer
        uint256 amount = campaigns[campaignId].currentAmount;
        campaigns[campaignId].isActive = false;
        
        payable(msg.sender).transfer(amount);
    }
    
    function emergencyWithdraw(uint256 campaignId) public onlyRegulator {
        require(campaigns[campaignId].organizer != address(0), "Campaign does not exist");
        
        // Emergency withdrawal for regulatory purposes
        uint256 amount = campaigns[campaignId].currentAmount;
        campaigns[campaignId].isActive = false;
        
        payable(regulator).transfer(amount);
    }
}