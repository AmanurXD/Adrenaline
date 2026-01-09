const https = require('https');

// ==========================================
// 🔧 USER CONFIGURATION (UPDATE THESE!)
// ==========================================
const CONFIG = {
    // Paste your Cookie string here
    COOKIE: `ph_phc_pRVynbMkwkZJn3GFAI33wbnerKsMZzOHGlHG6Mpl6vj_posthog=%7B%22distinct_id%22%3A%22019b5a97-1666-79d9-a5d7-af6f32cfb028%22%2C%22%24sesid%22%3A%5B1767951686623%2C%22019ba221-bfba-7193-95fa-f76dbb8f6325%22%2C1767951679418%5D%7D; prev_login=sj00ZNGLgKNEmPxp8SJenZE4Mc8GotnFLdRNlZmUVvw%2FjrQoXaly6MSKdfMuAl6xe1RIGjtJTvHSuapZp6or1xtCax2CSFqJpjM3DuIbQZ9XRnWkCkPHRI6UCoyUo1XX8YNmmFY2WAGhpByH--rED6ewspwPE%2FPwXD--gpLxxIrQ0Oanyq8HtYmciQ%3D%3D; _tryst_session=o90KEqd5mEK1UOduVmITcEpt3ead%2B3VofSf1N68%2B02TVmx5vEgJHyowWukXMM%2F8axjBrX2wfVOkT87bcElStEJHhK7tx9hHXllOb7dI15Zdq05tSlrnqFbQHEL7%2Bd5QUYH9zDtuzXwJZ13P8s73EyaOp%2F2vwonttuAlRfsraCTpNHChiomK8eUmka8DyI2synlKD%2Fa9E%2FitYXoqC82dU0zhbXM9Ul%2FxRuqUnDaMPOPAczpx5lKzOXTl61kt9B0%2B%2FC1uRklwdm4gW2wl1ddy9thyzHTnoHVuldFsSMqwL3aGRJT3hNKlzA%2FMaHBnRyWJM3FbqjQ9mk75x2CdPraj77%2Bxoj2BFkLidw3CEMIwJRtnlTrnCOCvBfyObpaFusT7OnTyI6gjL0sVkLRbCHaxVQYXmECDGttI4xFTu9Nxsglak%2Bay1PTDAPFBe%2BJ1ehjLPPemDKQqpDabGaSbCNuIKEE9rY2eKedY%2BvUYMAHKAbNK4oOitJqBMOEtNe1buwWWVW0m3DYmvfnbKfTC%2FMaeYv7jevbqTkvP5ZVm%2B%2BsLzUVrBz4bel50ThV%2FC0i7eePT8d0lm0Zp82ikmQuJJSYCJxlzzF%2BsWvjsmzK0mFDf4819SSbcpLVLPtaFE2arNS%2FQLQ8kHMTDjWtVVKgGUUXBbIpbyHuv%2FCz%2BuSv6FLshILv5r%2BUE7TFB7hLgG7EOzxjpWti8DKtLu2Ouvo6tiCy9x%2B26U7DWQ0Gh1wQaRMsogIHz%2B0lwe2BdaYwQaE1MHTZc8uvp7lufcaTYvDyYzTZo1eBOHgFHgx22O14NmGPsMIrrKZzHGrXBcBsZZ6lCLgFRfQPV3G24QrP%2F9SWFLDjV24DWBAR0fKMhUFfGUBLC%2BS7uZI19uRClldKwH72HfsvxWAhexFXoZSG82okWz2BppeE1QG8hGEv0iQm5LOqQ8vNJyrqhamvzQ%2Fgxbuk2pA%2Fc9EFR5uh9NhtdMjJNrLBADsW%2F35YKgjEv8%2Bu2ooyIiqKqT%2FqIbFdaaxKag5va%2F%2FFQ4g%2BtYHa9aU8PBKrflfrZtl4EvRwy3kXavNV4YJ05uY%2Bo91JCZMdeZwrzIMtp6L4E930xq%2F48d3bDSkO4CW88Iy8Ly5C%2FN3msxcKgmcw%3D%3D--%2Bl4KFRYvS15P%2Bejv--HU58XqUzKAXfMWSPOuMQqQ%3D%3D; ph_u=%7B%22distinct_id%22%3A%22ad787f9f-d597-47f4-8053-496c695a3d77%22%2C%22%24sesid%22%3A%5B1767951832861%2C%22019ba221-e70d-7132-846e-3a48e8b15612%22%2C1767951689485%5D%2C%22%24epp%22%3Atrue%7D`,
    
    // Paste your CSRF Token here
    CSRF_TOKEN: "IuIbBy19yoQ-f1GxiIkZhqVCNEisdY2BHjtklduKujMoA1FQj5YW5kN80BO7iaUacF5xx-ZGolx8G82B8BfvGg"
};

// ==========================================
// 🧠 ROBUST LOGIC
// ==========================================

const HEADERS = {
    "Host": "app.tryst.link",
    "Cookie": CONFIG.COOKIE,
    "X-Csrf-Token": CONFIG.CSRF_TOKEN,
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/143.0.0.0 Safari/537.36",
    "Accept": "application/json",
    "Origin": "https://app.tryst.link",
    "Referer": "https://app.tryst.link/members/providers",
    "Content-Type": "application/json",
};

// Reusable request function
function apiRequest(path, method = "PATCH") {
    return new Promise((resolve, reject) => {
        const req = https.request({
            hostname: 'app.tryst.link',
            path: path,
            method: method,
            headers: HEADERS
        }, (res) => {
            let body = '';
            res.on('data', chunk => body += chunk);
            res.on('end', () => {
                try {
                    const json = JSON.parse(body);
                    resolve({ status: res.statusCode, data: json });
                } catch {
                    resolve({ status: res.statusCode, data: {} });
                }
            });
        });
        req.on('error', reject);
        req.end();
    });
}

function sleep(ms) { return new Promise(r => setTimeout(r, ms)); }

async function runSniper() {
    console.clear();
    console.log("🎯 Tryst Nitro Sniper Started.");
    console.log("---------------------------------");

    // 1. INITIAL PROBE: Get the server truth
    console.log("📡 Probing server for timing...");
    let probe;
    try {
        probe = await apiRequest('/members/providers/profile/available.json', 'PATCH');
    } catch (e) {
        console.log("❌ Network Error. Retrying in 10s...");
        setTimeout(runSniper, 10000);
        return;
    }

    if (probe.status === 401 || probe.status === 403) {
        console.error("🛑 FATAL: Cookies Expired. Update Config.");
        process.exit(1);
    }

    const data = probe.data;
    const now = new Date();
    
    // Determine the exact moment we can fire
    let targetTime = now;
    if (data.available_now_usable_at) {
        targetTime = new Date(data.available_now_usable_at);
    }

    let msUntilFire = targetTime.getTime() - now.getTime();

    // 2. INTELLIGENT WAITING
    // If we have to wait, we schedule the next hit EXACTLY at that time.
    // We do not busy-wait. We assume the 'available_now_usable_at' is the law.

    if (msUntilFire > 0) {
        console.log(`⏳ Nitro Cooling Down.`);
        console.log(`   Current Time: ${now.toLocaleTimeString()}`);
        console.log(`   Next Activation: ${targetTime.toLocaleTimeString()}`);
        console.log(`   Status: Sleeping for ${(msUntilFire/60000).toFixed(1)} minutes...`);
        
        // We set a wake-up timer. 
        // ROBUSTNESS: We add 500ms buffer to ensure we don't wake up 1ms too early and get rejected.
        setTimeout(() => executeCycle(data.available_now), msUntilFire + 500);
    } else {
        // We are already late or exactly on time. Fire immediately.
        console.log("⚡ Ready to fire immediately.");
        await executeCycle(data.available_now);
    }
}

async function executeCycle(isCurrentlyOn) {
    console.log("\n⏰ Waking up! Executing Refresh Cycle...");

    try {
        // STEP A: If profile is ON, we must turn it OFF first (Nitro refresh)
        if (isCurrentlyOn) {
            process.stdout.write("   -> Turning OFF... ");
            await apiRequest('/members/providers/profile/available_off.json', 'PATCH');
            console.log("Done.");
            
            // Tiny pause to ensure database consistency (Prevents race conditions)
            await sleep(800); 
        }

        // STEP B: Turn ON (The Boost)
        process.stdout.write("   -> Turning ON...  ");
        const res = await apiRequest('/members/providers/profile/available.json', 'PATCH');
        
        if (res.status === 200) {
            console.log("✅ SUCCESS! Profile Boosted.");
            console.log(`   New Valid Until: ${res.data.available_until}`);
        } else {
            console.log(`❌ Failed. Status: ${res.status}`);
        }

    } catch (e) {
        console.error(`⚠️ Execution Error: ${e.message}`);
    }

    // Loop back to start to calculate the next cycle
    console.log("🔄 Recalculating next cycle...");
    setTimeout(runSniper, 2000);
}

// Start the machine
runSniper();
