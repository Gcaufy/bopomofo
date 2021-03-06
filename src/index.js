export const tones = [
    ['', 'ˉ'], // First deliberately left empty as first tone is default for bomofo
    ['ˊ', 'ˊ'],
    ['ˇ', 'ˇ'],
    ['ˋ', 'ˋ'],
    ['˙', '˙']
];

// First value is bopomofo, second is romanized, third is form if available
//  independently (with the soft "-i" (ㄭ) vowel which is the only vowel item that
// isn't represented independently in transcription except here with consonants)
export const consonants = [
  ['ㄅ', 'b', null, [
      'ㄚ', 'ㄛ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄥ',
      'ㄨ'
  ]],
  ['ㄆ', 'p', null, [
      'ㄚ', 'ㄛ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄥ',
      'ㄨ'
  ]],
  ['ㄇ', 'm', null, [
      'ㄚ', 'ㄛ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄥ',
      'ㄨ'
  ]],
  ['ㄈ', 'f', null, [
      'ㄚ', 'ㄛ', 'ㄟ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ'
  ]],
  ['ㄉ', 'd', null, [
      'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄚ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ'
  ]],
  ['ㄊ', 't', null, [
      'ㄚ', 'ㄛ', 'ㄝ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄢ', 'ㄧㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ'
  ]],
  ['ㄋ', 'n', null, [
      'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄤ', 'ㄧㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄢ', 'ㄨㄥ',
      'ㄩ', 'ㄩㄝ'
  ]],
  ['ㄌ', 'l', null, [
      'ㄚ', 'ㄛ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄤ', 'ㄥ',
      'ㄧ', 'ㄧㄚ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄤ', 'ㄧㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ',
      'ㄩ', 'ㄩㄝ', 'ㄩㄢ'
  ]],
  ['ㄍ', 'g', null, [
      'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ', 'ㄨㄥ'
  ]],
  ['ㄎ', 'k', null, [
      'ㄚ', 'ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ', 'ㄨㄥ'
  ]],
  ['ㄏ', 'h', null, [
      'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ', 'ㄨㄥ'
  ]],
  ['ㄐ', 'j', null, [
      'ㄧ', 'ㄧㄚ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄤ', 'ㄧㄥ',
      'ㄩ', 'ㄩㄝ', 'ㄩㄢ', 'ㄩㄣ', 'ㄩㄥ'
  ]],
  ['ㄑ', 'q', null, [
      'ㄧ', 'ㄧㄚ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄤ', 'ㄧㄥ',
      'ㄩ', 'ㄩㄝ', 'ㄩㄢ', 'ㄩㄣ', 'ㄩㄥ'
  ]],
  ['ㄒ', 'x', null, [
      'ㄧ', 'ㄧㄚ', 'ㄧㄝ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄤ', 'ㄧㄥ',
      'ㄩ', 'ㄩㄝ', 'ㄩㄢ', 'ㄩㄣ', 'ㄩㄥ'
  ]],
  ['ㄓ', 'zh', 'zhi', [
      'ㄭ', 'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ', 'ㄨㄥ'
  ]],
  ['ㄔ', 'ch', 'chi', [
      'ㄭ', 'ㄚ', 'ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ', 'ㄨㄥ'
  ]],
  ['ㄕ', 'sh', 'shi', [
      'ㄭ', 'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ'
  ]],
  ['ㄖ', 'r', 'ri', [
      'ㄭ', 'ㄜ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ'
  ]],
  ['ㄗ', 'z', 'zi', [
      'ㄭ', 'ㄚ', 'ㄜ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ'
  ]],
  ['ㄘ', 'c', 'ci', [
      'ㄭ', 'ㄚ', 'ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ'
  ]],
  ['ㄙ', 's', 'si', [
      'ㄭ', 'ㄚ', 'ㄜ', 'ㄞ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ',
      'ㄨ', 'ㄨㄛ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄥ'
  ]],
];

// These are all present within `medials`, but indicate which can be a complete
//  ending vowel combination
export const finals = [
    // independent vowels and combinations thereof (i.e., all vowel combinations
    //  (without consonants) except the "-i" (ㄭ) which is not represented as an
    //  independent character in transcription)
    'ㄚ', 'ㄛ', 'ㄜ', 'ㄝ', 'ㄞ', 'ㄟ', 'ㄠ', 'ㄡ', 'ㄢ', 'ㄣ', 'ㄤ', 'ㄥ', 'ㄦ',
    'ㄧ', 'ㄧㄚ', 'ㄧㄛ', 'ㄧㄝ', 'ㄧㄞ', 'ㄧㄠ', 'ㄧㄡ', 'ㄧㄢ', 'ㄧㄣ', 'ㄧㄤ', 'ㄧㄥ',
    'ㄨ', 'ㄨㄚ', 'ㄨㄛ', 'ㄨㄞ', 'ㄨㄟ', 'ㄨㄢ', 'ㄨㄣ', 'ㄨㄤ', 'ㄨㄥ',
    'ㄩ', 'ㄩㄝ', 'ㄩㄢ', 'ㄩㄣ', 'ㄩㄥ'
];

// Similar to finals, but only single items (and includes -i (ㄭ) as it is
//  connectable to consonants even while not used independently in transcription)
export const medials = [
    ['ㄚ', 'a', null],
    ['ㄛ', 'o', null],
    ['ㄜ', 'e', null],
    ['ㄝ', 'ê', null],
    ['ㄞ', 'ai', null],
    ['ㄟ', 'ei', null],
    ['ㄠ', 'ao', null],
    ['ㄡ', 'ou', null],
    ['ㄢ', 'an', null],
    ['ㄣ', 'en', null],
    ['ㄤ', 'ang', null],
    ['ㄥ', 'eng', null],
    ['ㄦ', 'er', null],
    // Occurs alone and followed by the previous (excepting ê (ㄝ), ao (ㄠ), ou (ㄡ), er (ㄦ)
    ['ㄧ', 'i', 'yi'],
    // Occurs alone and followed by the previous (excepting ê (ㄝ), ao (ㄠ), ou (ㄡ), er (ㄦ)
    ['ㄨ', 'u', 'wu'],
    // Occurs alone and followed only by these among the previous: ê (ㄝ), an (ㄢ), en (ㄣ), eng (ㄥ)
    ['ㄩ', 'ü', 'yu'],
    // Is different from all of the above in not being represented independently in
    //  transcription (except if including in combination with consonants)
    ['ㄭ', 'i', 'i']
];
